class CreateHoles < ActiveRecord::Migration[5.0]
  def change
    create_table :holes do |t|
      t.integer :number, null: false
      t.integer :par, null: false
      t.integer :yardage, null: false
      t.belongs_to :course
    end
  end
end
