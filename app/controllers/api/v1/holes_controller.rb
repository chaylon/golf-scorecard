class Api::V1::HolesController < ApplicationController
  skip_before_action :verify_authenticity_token


  def create
    holeInfo = params["courseData"]
    course = Course.find(params["course_id"])
    par = 0
    yardage = 0
    holeInfo.each do |hole|
      Hole.create(
        number: hole["hole"].to_i,
        par: hole["par"].to_i,
        yardage: hole["yardage"].to_i,
        course_id: course.id,
      )
      par += hole["par"].to_i
      yardage += hole["yardage"].to_i
    end
    course.par = par
    course.yardage = yardage
  end
end
