class StocksController < ApplicationController
	def search
		if params[:stock]
			@stock = Stock.find_by_ticker(params[:stock])
			@stock ||= Stock.new_from_lookup(params[:stock])
		end

		if @stock
			#render json: @stock this is good way to see how value stored in variable
			render partial: 'lookup'
		else
			render status: :not_found, nothing: true
		end
	end

end