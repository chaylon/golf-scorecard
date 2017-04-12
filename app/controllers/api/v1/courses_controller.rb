class Api::V1::CoursesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    courses = Course.all
    render json: {courses: courses}
  end

  def filter
    state_search = params[:state]
    courses = Course.where("state LIKE ?", "%#{state_search}%")
    # binding.pry
    render json: {courses: courses}
  end

  def show
    course = Course.find(params[:id])
    holes = @course.holes
    render json: {course: course, holes: holes}
  end

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
