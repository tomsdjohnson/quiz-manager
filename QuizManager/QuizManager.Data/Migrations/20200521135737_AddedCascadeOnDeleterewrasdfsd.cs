using Microsoft.EntityFrameworkCore.Migrations;

namespace QuizManager.Data.Migrations
{
    public partial class AddedCascadeOnDeleterewrasdfsd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "QuizId1",
                table: "Questions",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "QuestionId1",
                table: "Answers",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Questions_QuizId1",
                table: "Questions",
                column: "QuizId1");

            migrationBuilder.CreateIndex(
                name: "IX_Answers_QuestionId1",
                table: "Answers",
                column: "QuestionId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Answers_Questions_QuestionId1",
                table: "Answers",
                column: "QuestionId1",
                principalTable: "Questions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Questions_Quizzes_QuizId1",
                table: "Questions",
                column: "QuizId1",
                principalTable: "Quizzes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Answers_Questions_QuestionId1",
                table: "Answers");

            migrationBuilder.DropForeignKey(
                name: "FK_Questions_Quizzes_QuizId1",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Questions_QuizId1",
                table: "Questions");

            migrationBuilder.DropIndex(
                name: "IX_Answers_QuestionId1",
                table: "Answers");

            migrationBuilder.DropColumn(
                name: "QuizId1",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "QuestionId1",
                table: "Answers");
        }
    }
}
