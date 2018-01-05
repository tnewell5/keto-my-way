class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :category
      t.decimal :fat
      t.decimal :protein
      t.decimal :net_carbs

      t.timestamps
    end
  end
end
