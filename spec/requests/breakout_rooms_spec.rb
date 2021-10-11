require 'rails_helper'

RSpec.describe "BreakoutRooms", type: :request do
  describe "GET /index" do
    it "gets a list of breakout rooms" do
      BreakoutRoom.create(
        theme: 'Zoo Exhibit',
        rooms: ['Tiger Trail', 'Polar Bear Plunge']
      )

      get '/breakout_rooms'
      room = JSON.parse(response.body)

      expect(response).to have_http_status(200)
      expect(room.length).to eq 1
    end
  end
  describe "POST /create" do
    it "a breakout room" do
      breakout_room_params = {
        breakout_room: {
          theme: 'Zoo Exhibit',
          rooms: ['Tiger Trail', 'Polar Bear Plunge']
        }
      }
      post '/breakout_rooms', params: breakout_room_params
      expect(response).to have_http_status(200)

      room = BreakoutRoom.first
      expect(room.theme).to eq 'Zoo Exhibit'
    end
  end
end
