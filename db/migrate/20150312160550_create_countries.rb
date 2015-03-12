class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.string :name
      t.float :meal
      t.float :mcdonalds
      t.float :beer
      t.float :coke
      t.float :cigs
      t.float :rent
      t.float :cinema
      t.float :jeans
      t.float :shoes
      t.float :taxi
      t.float :coffee

      t.timestamps null: false
    end
  end
end
