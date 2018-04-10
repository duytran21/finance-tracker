class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :user_stocks
  has_many :stocks, through: :user_stocks
  has_many :friendships
  has_many :friends, through: :friendships
  has_many :articles

  belongs_to :role
  before_validation :set_default_role

  def active_for_authentication?
    super && approved?
  end

  def inactive_message
    if !approved?
      :not_approved
    else
      super # User whatever other msg
    end
  end
  
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

  def not_friends_with?(friend_id)
  	friendships.where(friend_id: friend_id).count < 1
  end

  def except_current_user(users)
  	users.reject { |user| user.id == self.id } #self mean the caller in this case current_user
  end

  def self.search(param)
  	return User.none if param.blank?

  	param.strip!
  	param.downcase!
  	(first_name_matches(param) + last_name_matches(param) + email_matches(param)).uniq #reference to this page http://guides.rubyonrails.org/v3.2/active_record_querying.html
  	#the above line will add up all result and then uniq to remove duplicate records.
  end

  def self.first_name_matches(param)
  	matches('first_name', param)
  end

  def self.last_name_matches(param)
  	matches('last_name', param)
  end

  def self.email_matches(param)
  	matches('email', param)
  end

  def self.matches(field_name, param)
  	where("lower(#{field_name}) like ?", "%#{param}%")
  	#Reference this page http://guides.rubyonrails.org/v3.2/active_record_querying.html
  	#Example: User.where("email like ?", "%@%") 
  	#Recommend querry by array method to avoid SQL injection exploits with String only.
  end

  def isAdmin?
    if self.role.name == "admin" 
      return true
    else
      return false
    end
  end

  private
  def set_default_role
    self.role ||= Role.find_by_name('registered')
    #self.role = Role.find(1)
  end

end
