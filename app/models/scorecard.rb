class Scorecard < ApplicationRecord
  belongs_to :user
  belongs_to :course
  has_many :scores
end
