class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.belongs_to :scorecard
      t.belongs_to :hole
      t.integer :strokes, null: false
    end
  end
end
