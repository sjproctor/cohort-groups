class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :cohort
      t.string 'names', array: true

      t.timestamps
    end
  end
end
