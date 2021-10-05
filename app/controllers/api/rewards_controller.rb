class Api::RewardsController < ApplicationController
  before_action :set_model, only: [:show, :destroy]
  
    def index
      reward = Reward.all
      render json: reward
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
      def set_model
        @reward = Reward.find(params[:id])
      end
  
      def reward_params
        params.require(:reward).permit(:name, :description, :cost)
      end
end
