class CreateScorecards < ActiveRecord::Migration[5.0]
  def change
    create_table :scorecards do |t|
      t.belongs_to :user
      t.belongs_to :course
    end
  end
end
