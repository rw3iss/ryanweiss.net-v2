
node changes:
- try to find NER in tree:
    - look in node tree reference for entry reference, or parent
        - if node is new, add to parent with new entry reference (need to find order)
    - node is added to tree... 
    - tree is saved (get entries) ... vdom refs?
    - NodeTree is rendered... 


* Object-first approach:
        - FilePlugin receives file.
            - creates FileEntry with reference to sample src/data... FilePlugin adds FileEnry to Blob content... Blob is re-rendered with previews.
            - talks with FileService -> Blob api (from Editor->FileService?) to try to upload the file.
                - FileService receives immediate File ID/reference while file uploads, associated with Blob, and receives upload endpoint.
                - FilePlugin puts new File ID into FileEntry (causes Blob to save).
                - If Blob refreshes or re-renders with updated FileEntry... it should try to load the ID (FileResolver.resolve(FileEntry))... or fallback to any existing sample...
                    - if FileResolver sees a File with 'status=uploading', it should wire up the upload progress check (poll to cached /File/</id> endpoint on server), and try to fallback to the sample render for the preview.
                - FileService can poll /File/<id> endpoint to check for status, and tell FilePlugin. FilePlugin will update meta of FileEntry for re-render?
        - FilePlugin needs to replace FileEntry with reference to real File reference.
        - FileEntry is added to content, content is saved. Content is re-rendered.
        - FilePlugin should try to use a FileResolver helper to resolve IDs to real files, or to otherwise return the file info with the status (ie. uploading), or can return a cached version.
        - When rendering FileEntry's, a preview is created for the file, along with actions for it. If a user 'removes' file by clicking the remove button next to its preview, FilePlugin tells FileService to cancel any upload for it and delete it, removes the FileEntry, Blob re-renders.
        - if user changes a file by editing the title or content body, File from FileEntry is changed through FileService and re-rerenders.
    - VIEW: Content nodes are serialized to HTML...... FileEntry should have independent actions for itself.
        -FileEntry is serialized to html... it should use suspended file and make a separate request on mount for cached file preview+meta from the FileResolve, or the real File?

* File Operations:
    - upload file + info to backend, get file reference (Storage Reference, and Parent association).
    - modify file info (change file cache entries and backend... referencing blobs should retrieve file info references dynamically.
    - delete file
    - get sample?
    - comment, share, move, etc.



FilePreview create:
-generate an HTMl view given some FileData (or FileEntry) (sample reference or real reference).



-user drops a file
-preview is created with thumbnail/sample, file data on html attributes.
-File instance is added to blob for upload
-upload may or may not be started (preview should be saved locally until upload)

* Serialize HTML to Nodes:
- on applyChanges(), WEditor goes through all html content and parses out the content to Nodes.
- When a file-preview is found:
    - either will be serialized to existing FileEntry with the given ID (for auto-retrieval on read) and position.
    - or will be serialized
    - create FileEntry node.
    - gather FileMeta info from the html attributes, put on FileEntry.
    - (will have an ID if already uploaded, or have 'dirty' file info (ie. changed name))
    -

