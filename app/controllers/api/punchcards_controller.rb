class Api::PunchcardsController < ApplicationController
    before_action :set_restaurant, only: [:index]
    before_action :set_punchcard, only: [:show, :destroy, :update, :update_image]


  def index
    punchcard = @restaurant.punchcards.all
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

  def update_image
    file = params[:file]
    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        @punchcard.update(logo: cloud_image['secure_url'])
      rescue => err
        render json: { errors: err }
      end
      # if current_user.save(user_params)
      #   # did save to cloudianry and db
      #   render json: current_user
      # else
      #   # did save to cloudianry but not to db
      #   render json: { errors: current_user.errors }, status: 422
      # end
    end
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

  def set_restaurant
    @restaurant = Restaurant.find(params[:restaurant_id])
  end

end
