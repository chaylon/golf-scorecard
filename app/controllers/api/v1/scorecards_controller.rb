class Api::V1::ScorecardsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @scorecards = Scorecard.where("user_id = #{current_user.id}")
    render json: {scorecards: scorecards}
  end

  def create

  end
end
