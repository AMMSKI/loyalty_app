class Api::RewardsController < ApplicationController
  before_action :get_restrant, only: [:index]
  before_action :set_reward, only: [:show, :destroy]
  
    def index
      render json: @punchcard.rewards.all
    end
  
    def show
      render json: @reward
    end
  
    def create
      @reward = Reward.new(reward_params)
  
      if @reward.save
        render json: @reward
      else
        render json: {error: @reward.errors}, status: 422
      end
    end

    def destroy
      @reward.destroy
      render json: @reward
    end
  
    private
      def set_reward
        @reward = Reward.find(params[:id])
      end
      
      def get_restrant
        @punchcard = Punchcard.find(params[:punchcard_id])
      end

      def reward_params
        params.require(:reward).permit(:name, :description, :cost)
      end
end
