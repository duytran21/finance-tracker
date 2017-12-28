class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :user_stocks
  has_many :stocks, through: :user_stocks

  def full_name 
  	return "#{first_name} #{last_name}".strip if (first_name || last_name)
  	"Anonymous"
  end
  def can_add_stock?(ticker_symbol)
  	under_stock_limit? && !stock_already_added?(ticker_symbol)
  end

  def under_stock_limit?
  	(user_stocks.count < 10)
  end

  def stock_already_added?(ticker_symbol)
  	# this function find if valid stock or not then go to check if it already existed in database then won't let user add to Portfolio.
  	stock = Stock.find_by_ticker(ticker_symbol)
  	return false unless stock
  	user_stocks.where(stock_id: stock.id).exists? 
  	# The line above means: for example: u = User.first => u.user_stocks.where(stock_id: 1).exists? return true if exists or false if doesn't
  end
end
