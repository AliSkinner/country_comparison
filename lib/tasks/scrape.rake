require 'open-uri'

namespace :scrape do
  desc "gets country data"
  task get_country_data: :environment do
    puts "Getting data......."

    begin 

      page = Nokogiri::HTML(open("http://www.numbeo.com/cost-of-living/prices_by_country.jsp?displayCurrency=GBP&itemId=60&itemId=64&itemId=17&itemId=26&itemId=114&itemId=6&itemId=4&itemId=3&itemId=1&itemId=44&itemId=108"))

        puts page.css('tbody'//'tr').text




  end

end
