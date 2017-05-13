class CreateTeas < ActiveRecord::Migration[5.0]
  def change
    create_table :teas do |t|
      t.string :name
      t.string :origin
      t.boolean :caffeine
      t.boolean :looseleaf
      t.float :quantity

      t.timestamps
    end
  end
end
