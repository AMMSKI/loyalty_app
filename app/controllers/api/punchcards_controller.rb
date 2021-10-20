class Api::PunchcardsController < ApplicationController
    before_action :set_restaurant, only: [:index]
    before_action :set_punchcard, only: [:show, :destroy, :update, :update_image]


  def index
    punchcard = @restaurant.punchcards.all
    render json: punchcard
  end

  def show 
    render json: @punchcard
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
      render json: {error: @punchcard.errors}, status: 422
    end
  end

  
  def punchcard_by_user
    render json: User.punchcards_byuser(params[:id])
  end

  def update_image
    file = params[:file]
    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        if @punchcard.update(logo: cloud_image['secure_url'])
          render json: @punchcard
        else
          render json: @punchcard.error, status: 422
        end
      rescue => err
        render json: { errors: err }
      end
    end
  end
  
  def update 

    if @punchcard.update(punchcard_params)
      render json: @punchcard
    else
      render json: @punchcard.error, state: 422
    end
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
    params.require(:punchcard).permit(:description, :user_id, :restaurant_id)
  end

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end

end
