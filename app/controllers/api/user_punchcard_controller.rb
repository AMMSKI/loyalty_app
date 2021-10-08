class Api::UserPunchcardController < ApplicationController
  before_action :set_user, only: [:index]
  before_action :set_userPunchcard, only: [:show, :update, :destroy]

  def index
    user_punchcards = @user.userPunchcards.all
    render json: user_punchcards
  end

  def show
    render json: UserPunchcard.punchcard_show(params[:id])[0]
  end

  def show_rewards
    render json: UserPunchcard.rewards_show(params[:punchcard_id])
  end

  def create
    @user_punchcard = UserPunchcard.new(userPunchcard_params)

    if @user_punchcard.save
      render json: @userPunchcard
    else
      # render json: {error: @userPunchcard.error}, status: 422
    end
  end

  def destroy
    @userPunchcard.destroy
    render json: @userPunchcard
  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_userPunchcard
      @userPunchcard = UserPunchcard.find(params[:id])
    end

    def userPunchcard_params
      params.require(:user_punchcard).permit(:expiration_date, :current_points, :user_id, :punchcard_id)
    end
end
