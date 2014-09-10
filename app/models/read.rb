class Read < ActiveRecord::Base
	mount_uploader :book, PhotoUploader
end
