class Score < ApplicationRecord
  belongs_to :scorecard
  belongs_to :hole

  validates :strokes, presence: true, numericality: true
end
