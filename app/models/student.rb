class Student < ApplicationRecord
  validates :cohort, presence: true
end
