require 'open-uri'

namespace :scrape do
  desc "gets country data"
  task get_country_data: :environment do
    puts "Getting data......."

    begin 
      page = Nokogiri::HTML(open("http://www.numbeo.com/cost-of-living/prices_by_country.jsp?displayCurrency=GBP&itemId=60&itemId=64&itemId=17&itemId=26&itemId=114&itemId=6&itemId=4&itemId=3&itemId=1&itemId=44&itemId=108"))

      country_array = []
      page.css('tbody//tr').each do |row|
        country_array << row
      end

      country_array.each do |row|
        Country.create(

          name: row.css('td')[0].text,
          meal: row.css('td')[1].text,
          mcdonalds: row.css('td')[2].text,
          beer: row.css('td')[3].text,
          coke: row.css('td')[4].text,
          cigs: row.css('td')[5].text,
          rent: row.css('td')[6].text,
          cinema: row.css('td')[7].text,
          jeans: row.css('td')[8].text,
          shoes: row.css('td')[9].text,
          taxi: row.css('td')[10].text,
          coffee: row.css('td')[11].text,
          )
      end

    rescue
      puts 'Error'
    end
  end
end