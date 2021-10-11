class CreateBreakoutRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :breakout_rooms do |t|
      t.string :theme
      t.string 'rooms', array: true

      t.timestamps
    end
  end
end
