class Api::V1::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: {user: current_user}
  end

  def show
    scorecards = Scorecard.where("user_id = #{current_user.id}")
    rounds = scorecards.length.to_f
    sum = 0
    scorecards.each do |scorecard|
      sum += scorecard.total
    end
    average = (sum/rounds).round(2)
    hash = Scorecard.where('user_id = ?', current_user.id).group('course_id').order('count_id DESC').count(:id)
    key = hash.key(hash.values.max)
    favorite = Course.find(key).name
    render json: {rounds: rounds, average: average, favorite: favorite}
  end

end
