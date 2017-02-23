class Api::V1::HolesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    holeInfo = params["courseData"]
    holeInfo.each do |hole|
      binding.pry
      Hole.create(
        number: params["hole"].to_i,
        par: params["par"].to_i,
        yardage: params["yardage"].to_i,
        course_id: params["course_id"].to_i,
      )
    end
  end

  private

  def hole_params
    params.require(:hole).permit(:number, :par, :yardage, :course_id, :courseInfo)
  end

end
