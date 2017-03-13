class UpdateScorecard < ActiveRecord::Migration[5.0]
  def change
    add_column :scorecards, :total, :integer
  end
end
