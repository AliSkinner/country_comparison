class CountriesController < ApplicationController

  def index
    @uk = Country.find(137)
    @countries = Country.all
  end


end
