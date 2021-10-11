class StudentsController < ApplicationController

  def index
    students = Student.all
    render json: students
  end

  def create
    student = Student.create(student_params)
    if student.valid?
      render json: student
     else
       render json: student.errors, status: 422
     end
  end

  private
  def student_params
    params.require(:student).permit(:cohort, :names => [])
  end
end
