class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content
      t.text :description
      t.boolean :isVisible
      t.string :tags
      t.string :img_url

      t.timestamps
    end
  end
end
