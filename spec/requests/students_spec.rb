require 'rails_helper'

RSpec.describe "Students", type: :request do

  describe "GET /index" do
    it "gets a list of students" do
      Student.create(
        cohort: 'Delta',
        names: ['Ashley', 'Brandon']
      )

      get '/students'
      student = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(student.length).to eq 1
    end
  end

  describe "POST /create" do
    it "a student set" do
      student_params = {
        student: {
          cohort: 'Delta',
          names: ['Ashley', 'Brandon']
        }
      }

      post '/students', params: student_params

      p student_params
      expect(response).to have_http_status(200)

      student = Student.first
      expect(student.cohort).to eq 'Delta'
    end
  end

end
