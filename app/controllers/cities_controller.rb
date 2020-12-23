class CitiesController < ApplicationController
  def index
    @cities = City.all

    # the `geocoded` scope filters only flats with coordinates (latitude & longitude)
    @markers = @cities.geocoded.map do |city|
      {
        lat: city.latitude,
        lng: city.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { city: city })
      }
    end
  end
end
