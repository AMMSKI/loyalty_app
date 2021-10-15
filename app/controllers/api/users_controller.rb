class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except:[:update_image]
  before_action :set_user, only: [:show, :destroy, :update]


  def index
    render json: User.all
  end

  def show
    render json: @userDeviseTokenAuth::RegistrationsController
  end 

  def create
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: {errors: user.errors}, status: 422
    end
  end

  def update_image
    file = params[:file]
    if file
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        if current_user.update(image: cloud_image['secure_url'])
          render json: current_user
        else 
          render json: current_user.errors, status: 422
        end
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
    if(current_user.update(user_params))
      render json: current_user
    else
      render json: current_user.errors, status: 422
    end
  end

  def punchcard_by_user
    render json: User.punchcards_byuser(params[:id])
  end

  def destroy
    @current_user.destroy
    # render json: @current_user
    redirect_to(new_user_session_path)
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :account_type, :email, :password, :image)
  end

end
