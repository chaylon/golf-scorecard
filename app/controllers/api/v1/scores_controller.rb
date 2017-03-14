class Api::V1::ScoresController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @course = params["course"]
    @scorecard = Scorecard.last
    holeScores = params["holeScores"]
    holeScores.to_unsafe_h.each do |hole,score|
      @hole = Hole.where(["course_id = ? and number = ?", "#{@course['id']}", "#{hole}"]).first
      Score.create(scorecard: @scorecard, hole_id: @hole["id"], strokes: score)
    end
  end

end
