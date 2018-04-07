class ArticlesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:blogs, :show]
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  before_action :require_same_user, only: [:edit, :update, :destroy]
  before_action :require_admin, only: [:index]

  # GET /articles
  # GET /articles.json
  def index
    @articles = Article.order(created_at: :desc).all
  end

  def myposts
    @articles = current_user.articles.order(created_at: :desc)
  end

  def blogs
    @articles_five_latest = Article.order(created_at: :desc).limit(5)
    @articles_latest = Article.order(created_at: :desc).limit(1)
    @articles_next_four = Article.order(created_at: :desc).limit(4).offset(2)
    @articles_rest = Article.order(created_at: :desc).offset(5)
  end

  # GET /articles/1
  # GET /articles/1.json
  def show
  end

  # GET /articles/new
  def new
    @article = Article.new
  end

  # GET /articles/1/edit
  def edit
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(article_params)
    @article.user = current_user
    respond_to do |format|
      if @article.save
        format.html { redirect_to article_path(@article), notice: 'Article was successfully created.' }
        format.json { render :show, status: :created, location: article_path(@article) }
      else
        format.html { render :new }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /articles/1
  # PATCH/PUT /articles/1.json
  def update
    respond_to do |format|
      if @article.update(article_params)
        format.html { redirect_to article_path, notice: 'Article was successfully updated.' }
        format.json { render :show, status: :ok, location: article_path }
      else
        format.html { render :edit }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @article.destroy
    respond_to do |format|
      format.html { redirect_to articles_path, notice: 'Article was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_article
      @article = Article.find(params[:id])
      #@article = Article.find_by_user_id(params[:user_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def article_params
      params.require(:article).permit(:title, :content, :description, :isVisible, :tags, :img_url, :user_id, :category_id)
    end

    def require_admin
      if !current_user.isAdmin?
        flash[:danger] = "This request requires admin permission!"
      end
    end

    def require_same_user
      if current_user != @article.user and !current_user.isAdmin?
        flash[:danger] = "You can only edit or delete your own articles"
        redirect_to root_path
      end
    end
end
