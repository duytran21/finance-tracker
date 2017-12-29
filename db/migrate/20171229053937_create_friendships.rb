class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.belongs_to :user
      t.belongs_to :friend, class: 'User'
      #these lines will creat Friendship table with user_id and friend_id
      t.timestamps
    end
  end
end
