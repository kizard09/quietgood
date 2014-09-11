class Blog < ActiveRecord::Base
	validates :name, presence: true
	has_many :heros

end
