class Api::V1::HolesController < ApplicationController
  skip_before_action :verify_authenticity_token


  def create
    holeInfo = params["courseData"]
    holeInfo.each do |hole|
      Hole.create(
        number: hole["hole"].to_i,
        par: hole["par"].to_i,
        yardage: hole["yardage"].to_i,
        course_id: params["course_id"].to_i,
      )
    end
  end
end
