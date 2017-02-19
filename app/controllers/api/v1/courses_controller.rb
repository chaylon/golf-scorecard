class Api::V1::CoursesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @course = Course.create(
      name: params[:name],
      address: params[:address],
      city: params[:city],
      state: params[:state],
      zip: params[:zip]
    )
  end
end
