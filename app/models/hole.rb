class Hole < ApplicationRecord
  validates :number, presence: true, numericality: true
  validates :par, presence: true, numericality: true, inclusion: {in: [3..5]}
  validates :yardage, presence: true, numericality: true
end
