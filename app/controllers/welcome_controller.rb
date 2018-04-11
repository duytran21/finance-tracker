class WelcomeController < ApplicationController
	skip_before_action :authenticate_user!
	def index 
		@hp_articles = Article.order(created_at: :desc).limit(6)
	end
end
