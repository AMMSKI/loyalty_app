class Api::PunchcardsController < ApplicationController
    before_action :set_punchcard, only: [:show, :destroy, :update]


  def index
    punchcard = Punchcard.all
    render json: punchcard
  end

  def all
    punchcards = Punchcard.punchcard_rest
    render json: punchcards
  end


  def create
    @punchcard = Punchcard.new(punchcard_params)

    if @punchcard.save
      render json: @punchcard
    else
      render json: {error: @punch.errors}, status: 422
    end
  end

  
  def punchcard_by_user
    render json: User.punchcards_byuser(params[:id])
  end

  
  def update 
    @punchcard.update(punchcard_params)
  end



  def destroy
    @punchcard.destroy
    render json: @punchcard
  end



  private

  def set_punchcard
    @punchcard = Punchcard.find(params[:id])
  end

  def punchcard_params
    params.require(:punchcard).permit(:total_points, :user_id, :restaurant_id)
  end

end
