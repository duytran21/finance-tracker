class FriendshipsController < ApplicationController

	def destroy
		#debugger
		@friendship = current_user.friendships.where(friend_id: params[:id]).first
		#where().first = order by [primary_key] limit 1
		#Example: where().first(3) return 1st 3 records fetched by querry statement.
		@friendship.destroy
		respond_to do |format|
	      format.html { redirect_to my_friends_path, notice: "Friend was successfully removed!" }
	      format.json { head :no_content }
	    end
	end

end