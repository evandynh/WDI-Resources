class CreateVampires < ActiveRecord::Migration[5.0]
  def change
    create_table :vampires do |t|
      t.string :name
      t.integer :age
      t.string :sire
      t.boolean :staked

      t.timestamps
    end
  end
end
