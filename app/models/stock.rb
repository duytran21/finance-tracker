class Stock < ApplicationRecord

	def self.find_by_ticker(ticker_symbol)
		where(ticker: ticker_symbol).first
	end

	def self.new_from_lookup(ticker_symbol)	
		looked_up_stock = StockQuote::Stock.quote(ticker_symbol)
		return nil unless looked_up_stock.name

		new_stock = new(ticker: looked_up_stock.symbol, name: looked_up_stock.name)
		new_stock.last_price = new_stock.price
		new_stock

	end

	def price
		sClosing_price = StockQuote::Stock.quote(ticker).l
		if sClosing_price
			closing_price = sClosing_price.gsub(/[^\d^\.]/, "").to_d
			return "#{closing_price} (Closing)"
		end

		sOpening_price = StockQuote::Stock.quote(ticker).op
		if sOpening_price
			opening_price = sOpening_price.gsub(/[^\d^\.]/, "").to_d
			return "#{opening_price} (Opening)"
		end

		"Unavailable"
	end
end
