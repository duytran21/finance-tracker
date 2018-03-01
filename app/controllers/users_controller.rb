class UsersController < ApplicationController
	before_action :require_admin, only: [:index, :edit, :destroy, :update]
	
	def my_portfolio
		@user_stocks = current_user.stocks
		@user = current_user
	end

	def my_friends
		@friendships = current_user.friends
	end

	def search
		@users = User.search(params[:search_param])

		if @users
			@users = current_user.except_current_user(@users)
			render partial: "friends/lookup"
		else
			render status: :not_found, nothing: true
		end
	end

	def add_friend
		@friend = User.find(params[:friend])
		current_user.friendships.build(friend_id: @friend.id)

		if current_user.save
			redirect_to my_friends_path, notice: "Friend was successfully added!"
		else
			redirect_to my_friends_path, flash[:error] = "There was an error with adding user as friend"
		end
	end

	def show
		#debugger
		#@friend = User.find(params[:id])
		@user = User.find(params[:id])
		@user_stocks = @user.stocks
	end

	def index
=begin
		if params[:approved] == "false"
			@users = User.where(approved: false)
		else
			@users = User.all
		end
=end
		@users = current_user.except_current_user(User.all)
	end

	def edit
	  @user = User.find(params[:id])
	end

	def update
	  #debugger
	  @user = User.find(params[:id])
	  respond_to do |format|
	      if @user.update(user_params)
	        format.html { redirect_to users_path, notice: 'User was successfully updated.' }
	        format.json { render :show, status: :ok }
	      end
  	  end
	end

	private
		def set_user
	      @user = User.find(params[:id])
	    end
		def require_admin
			if current_user.role.name != 'admin'
				#flash[:error] = "You need admin permision to perform this action!"
				redirect_to root_path, :flash => { :error => "You need admin permision to perform this action!" }
			end
		end
		def user_params
			params.require(:user).permit(:approved, :role_id)
		end
end