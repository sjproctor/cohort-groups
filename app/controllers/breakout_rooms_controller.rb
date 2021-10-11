class BreakoutRoomsController < ApplicationController

  def index
    breakout_rooms = BreakoutRoom.all
    render json: breakout_rooms
  end

  def create
    breakout_room = BreakoutRoom.create(breakout_room_params)
    if breakout_room.valid?
      render json: breakout_room
     else
       render json: breakout_room.errors, status: 422
     end
  end

  private
  def breakout_room_params
    params.require(:breakout_room).permit(:theme, :rooms => [])
  end
end
