class Hole < ApplicationRecord
  validates :number, presence: true, numericality: true
  validates :par, presence: true, numericality: true
  validates :yardage, presence: true, numericality: true
end
