class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: {user: current_user}
  end

  def show

  end

end
