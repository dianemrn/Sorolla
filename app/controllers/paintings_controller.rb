class PaintingsController < ApplicationController
  def index
    @paintings = Painting.all
    # the `geocoded` scope filters only flats with coordinates (latitude & longitude)
    @markers = @paintings.geocoded.map do |painting|
      {
        lat: painting.latitude,
        lng: painting.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { painting: painting }),
        image_url: helpers.asset_url("paint-board-and-brush.png")
      }
    end
  end

  def create
  end

  def new
  end
end
